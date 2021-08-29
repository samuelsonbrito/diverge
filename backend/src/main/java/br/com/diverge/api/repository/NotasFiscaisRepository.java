package br.com.diverge.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diverge.api.models.NotasFiscais;
import br.com.diverge.api.models.Servico;

public interface NotasFiscaisRepository extends JpaRepository<NotasFiscais, Long>{
	
	NotasFiscais findById(long id);
}
