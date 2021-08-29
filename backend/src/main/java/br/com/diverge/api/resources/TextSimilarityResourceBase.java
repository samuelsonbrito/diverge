package br.com.diverge.api.resources;

import java.util.Collection;

import org.apache.uima.fit.component.Resource_ImplBase;
import org.dkpro.similarity.algorithms.api.SimilarityException;
import org.dkpro.similarity.algorithms.api.TextSimilarityMeasure;
 
 
public abstract class TextSimilarityResourceBase
    extends Resource_ImplBase
    implements TextSimilarityMeasure
{
    public enum TextSimilarityResourceMode {
        jcas,
        text,
        list
    }
     
    protected TextSimilarityMeasure measure;
    protected TextSimilarityResourceMode mode;
     
    @Override
    public double getSimilarity(Collection stringList1, Collection stringList2)
        throws SimilarityException
    {
        return measure.getSimilarity(stringList1, stringList2);
    }
 
    @Override
    public double getSimilarity(String[] strings1, String[] strings2)
        throws SimilarityException
    {
        return measure.getSimilarity(strings1, strings2);
    }
 
    @Override
    public double getSimilarity(String string1, String string2)
        throws SimilarityException
    {
        return measure.getSimilarity(string1, string2);
    }
 
    @Override
    public String getName()
    {
        return measure.getName();
    }
 
    @Override
    public boolean isDistanceMeasure()
    {
        return measure.isDistanceMeasure();
    }
     
    @Override
    public void beginMassOperation()
    {
        measure.beginMassOperation();
    }
     
    @Override
    public void endMassOperation()
    {
        measure.endMassOperation();
    }
 
    public TextSimilarityResourceMode getMode()
    {
        return mode;
    }
     
    public void setMode(TextSimilarityResourceMode mode)
    {
        this.mode = mode;
    }
}
