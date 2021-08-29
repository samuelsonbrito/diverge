package br.com.diverge.api.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TomadorServico {

	@Id
	private int id;
	private String nome;
	private String cpfCnpj;
	
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
	public String getCpfCnpj() {
		return cpfCnpj;
	}
	public void setCpfCnpj(String cpfCnpj) {
		this.cpfCnpj = cpfCnpj;
	}
	
}
