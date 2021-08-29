package br.com.diverge.api.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "servico")
public class Servico {

	private int id;
	private String nome;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
}
