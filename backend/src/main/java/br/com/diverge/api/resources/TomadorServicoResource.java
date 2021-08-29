package br.com.diverge.api.resources;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import br.com.diverge.api.models.TomadorServico;
import br.com.diverge.api.repository.TomadorServicoRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")  
@RestController
@RequestMapping(value = "/api")
@Api(value="API REST TomadorServico")
public class TomadorServicoResource {
	
	@Autowired
	TomadorServicoRepository repository;
	
	@ApiOperation(value="Retorna lista de TomadorServico")
	@GetMapping("tasks")
	public List<TomadorServico> findAll(){
		return repository.findAll();
	}
	
	@ApiOperation(value="Retorna tomadorservico única")
	@GetMapping("tomadorservico/{id}")
	public TomadorServico findById(@PathVariable(value="id") long id) {
		return repository.findById(id);
	}
	
	@ApiOperation(value="Salva tomadorservico")
	@PostMapping("tomadorservico")
	@ResponseStatus(HttpStatus.CREATED)
	public TomadorServico save(@RequestBody @Valid TomadorServico contact) {
		return repository.save(contact);
	}
	
	@ApiOperation(value="Deleta tomadorservico")
	@DeleteMapping("servico/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void dalete(@PathVariable(value="id") long id) {
		repository.deleteById(id);
	}
	
	@ApiOperation(value="Atualiza tomadorservico")
	@PutMapping("tomadorservico")
	public TomadorServico update(@RequestBody @Valid TomadorServico contact) {
		return repository.save(contact);
	}
	
}
