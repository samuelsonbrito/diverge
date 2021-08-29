package br.com.diverge.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diverge.api.models.PrestadorServico;

public interface PrestadorServicoRepository extends JpaRepository<PrestadorServico, Long>{
	
	PrestadorServico findById(long id);
}
