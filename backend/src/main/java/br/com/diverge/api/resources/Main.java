package br.com.diverge.api.resources;

import org.dkpro.similarity.algorithms.api.SimilarityException;

public class Main {

	public static void main(String[] args) {
		
		WordNGramJaccardMeasure TextSimilarityResourceBase = new WordNGramJaccardMeasure();
		String[] tokens1 = "This is a short example text .".split(" ");   
		String[] tokens2 = "A short example text could look like that .".split(" ");

		double score;
		try {
			score = TextSimilarityResourceBase.getSimilarity(tokens1, tokens2);
			System.out.println("Similarity: " + score);
		} catch (SimilarityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
	}
}
