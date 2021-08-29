import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

export const Table = styled.table`
    .table > tr td { /* Toda a tabela com fundo creme */
	background: #ffc;
	} 
.table#alter tr.dif td {
	background: #eee; /* Linhas com fundo cinza */
	}`;

export const Filters = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    
    margin-bottom: 30px;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;

        background: none;
        color: ${props => props.theme.colors.white};

        margin: 0 10px;
        
        opacity: .4;
        transition: opacity .3s;

        &:hover {
            opacity: .7;
        }
    }

    .tag-filter-recurrent::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.success};    
    }

    .tag-filter-eventual::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.warning};    
    }
    
    .tag-actived {
       opacity: 1;
    }

    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }
    .input[type="file"] {
        display: none;
    }
`;