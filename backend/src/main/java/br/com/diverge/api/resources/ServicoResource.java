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

import br.com.diverge.api.models.Servico;
import br.com.diverge.api.repository.ServicoRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")  
@RestController
@RequestMapping(value = "/api")
@Api(value="API REST Servico")
public class ServicoResource {
	
	@Autowired
	ServicoRepository repository;
	
	@ApiOperation(value="Retorna lista de servico")
	@GetMapping("servico")
	public List<Servico> findAll(){
		return repository.findAll();
	}
	
	@ApiOperation(value="Retorna task única")
	@GetMapping("servico/{id}")
	public Servico findById(@PathVariable(value="id") long id) {
		return repository.findById(id);
	}
	
	@ApiOperation(value="Salva servico")
	@PostMapping("servico")
	@ResponseStatus(HttpStatus.CREATED)
	public Servico save(@RequestBody @Valid Servico contact) {
		return repository.save(contact);
	}
	
	@ApiOperation(value="Deleta servico")
	@DeleteMapping("servico/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void dalete(@PathVariable(value="id") long id) {
		repository.deleteById(id);
	}
	
	@ApiOperation(value="Atualiza servico")
	@PutMapping("servico")
	public Servico update(@RequestBody @Valid Servico contact) {
		return repository.save(contact);
	}
	
}
