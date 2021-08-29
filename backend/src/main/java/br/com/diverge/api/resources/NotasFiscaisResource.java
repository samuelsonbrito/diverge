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

import br.com.diverge.api.models.NotasFiscais;
import br.com.diverge.api.repository.NotasFiscaisRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")  
@RestController
@RequestMapping(value = "/api")
@Api(value="API REST NotasFiscais")
public class NotasFiscaisResource {
	
	@Autowired
	NotasFiscaisRepository repository;
	
	@ApiOperation(value="Retorna lista de NotasFiscais")
	@GetMapping("tasks")
	public List<NotasFiscais> findAll(){
		return repository.findAll();
	}
	
	@ApiOperation(value="Retorna task única")
	@GetMapping("notasfiscais/{id}")
	public NotasFiscais findById(@PathVariable(value="id") long id) {
		return repository.findById(id);
	}
	
	@ApiOperation(value="Salva notasfiscais")
	@PostMapping("notasfiscais")
	@ResponseStatus(HttpStatus.CREATED)
	public NotasFiscais save(@RequestBody @Valid NotasFiscais contact) {
		return repository.save(contact);
	}
	
	@ApiOperation(value="Deleta notasfiscais")
	@DeleteMapping("notasfiscais/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void dalete(@PathVariable(value="id") long id) {
		repository.deleteById(id);
	}
	
	@ApiOperation(value="Atualiza notasfiscais")
	@PutMapping("notasfiscais")
	public NotasFiscais update(@RequestBody @Valid NotasFiscais contact) {
		return repository.save(contact);
	}
	
}
