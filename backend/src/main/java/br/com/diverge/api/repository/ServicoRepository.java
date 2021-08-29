package br.com.diverge.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diverge.api.models.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Long>{
	
	Servico findById(long id);
}
