import React, { useMemo, useState, useEffect } from 'react';
// import { uuid } from 'uuidv4';
 
// import ContentHeader from '../../components/ContentHeader';
// import SelectInput from '../../components/SelectInput';
// import HistoryFinanceCard from '../../components/HistoryFinanceCard';

// import gains from '../../repositories/gains';
// import expenses from '../../repositories/expenses';
// import formatCurrency from '../../utils/formatCurrency';
// import formatDate from '../../utils/formatDate';
// import listOfMonths from '../../utils/months';

import { DataGrid, GridColDef } from '@material-ui/data-grid';
import Button from '../../components/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { DropzoneArea } from 'material-ui-dropzone';

    const columns: GridColDef[] = [
        { 
            field: 'nome',
            headerName: 'Nome da Empresa',
            width: 200,
        },
        { 
            field: 'serv',
            headerName: 'Serviço Prestado',
            width: 200,
        },
        { 
            field: 'cod',
            headerName: 'Codigo da NFS',
            width: 300,
        },
        {
          field: 'cnpj',
          headerName: 'CNPJ',
          width: 200,
        },
        {
          field: 'div',
          headerName: 'Divergente',
          width: 200,
        }
      ];

      const rows = [
        { id: 1, nome: 'Microsofty', serv: 'Venda de gatinhos', cod: '1.02 - Programação', cnpj: '21.247.332/0001-45', div:'Sim' },
        { id: 2, nome: 'Sonni', serv: 'Vendendo de x-box', cod: '1.01 - Análise e desenvolvimento de sistemas.', cnpj: '13.110.823/0001-11', div:'Sim' },
        { id: 3, nome: 'MonsterBull', serv: 'Vendendo energetico', cod: '1.03 - Processamento, armazenamento ou hospedagem de dados, textos, imagens, vídeos, páginas eletrônicas, aplicativos e sistemas de informação, entre outros formatos, e congêneres.', cnpj: '19.567.831/0001-78', div:'Sim' },
        { id: 4, nome: 'Sufras', serv: 'Palestra Estudantil', cod: '8.02 - Educação', cnpj: '49.225.526/0001-69', div:'Não' },
        { id: 5, nome: 'Cronos', serv: 'Tour por Manaus', cod: '9.02 - Turismo', cnpj: '62.716.694/0001-15', div:'Não' },
      ];

      export default function DataGridDemo() {
        return (
            <>
                <div style={{ height: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <DataGrid style={{ backgroundColor: '#FFFFFF', boxShadow: ' 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)', borderRadius: '4px' }}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    disableColumnFilter
                    disableColumnMenu
                    />
                </div>
            </>
        );
      }