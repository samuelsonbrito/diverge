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

import br.com.diverge.api.models.PrestadorServico;
import br.com.diverge.api.repository.PrestadorServicoRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")  
@RestController
@RequestMapping(value = "/api")
@Api(value="API REST PrestadorServico")
public class PrestadorServicoResource {
	
	@Autowired
	PrestadorServicoRepository repository;
	
	@ApiOperation(value="Retorna lista de PrestadorServico")
	@GetMapping("prestadorservico")
	public List<PrestadorServico> findAll(){
		return repository.findAll();
	}
	
	@ApiOperation(value="Retorna task única")
	@GetMapping("prestadorservico/{id}")
	public PrestadorServico findById(@PathVariable(value="id") long id) {
		return repository.findById(id);
	}
	
	@ApiOperation(value="Salva prestadorservico")
	@PostMapping("prestadorservico")
	@ResponseStatus(HttpStatus.CREATED)
	public PrestadorServico save(@RequestBody @Valid PrestadorServico contact) {
		return repository.save(contact);
	}
	
	@ApiOperation(value="Deleta prestadorservico")
	@DeleteMapping("prestadorservico/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void dalete(@PathVariable(value="id") long id) {
		repository.deleteById(id);
	}
	
	@ApiOperation(value="Atualiza prestadorservico")
	@PutMapping("prestadorservico")
	public PrestadorServico update(@RequestBody @Valid PrestadorServico contact) {
		return repository.save(contact);
	}
	
}
