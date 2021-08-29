package br.com.diverge.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diverge.api.models.Servico;
import br.com.diverge.api.models.TomadorServico;

public interface TomadorServicoRepository extends JpaRepository<TomadorServico, Long>{
	
	TomadorServico findById(long id);
}
