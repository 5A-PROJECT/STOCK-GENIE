import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 예측에서 보여주는 화살표
const UpIcon = styled(ArrowDropUpIcon)`
  color: red;
  font-size: ${(props) => props.size};
`;

const DownIcon = styled(ArrowDropDownIcon)`
  color: blue;
  font-size: ${(props) => props.size};
`;

const StableIcon = styled(ArrowRightIcon)`
  color: grey;
  font-size: ${(props) => props.size};
`;

// 상세보기 버튼
const ZoomIcon = styled(ZoomInIcon)`
  color: navy;
  font-size: ${(props) => props.size};
`;

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function PaginationTable({ params }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    const getData = async () => {
      // console.log('////');
      // console.log(props.params.index);
      const result = await axios
        .get('http://localhost:8000/predict/stocktable', {
          params: {
            index: params.index.toUpperCase(),
          },
          headers: {
            Authorization: `JWT ${token}`,
          },
        })
        .then((res) => {
          setData(res.data);
        });
    };
    if (params.index) {
      getData();
    }
    console.log(data);
  }, [params.index]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="stickytable">
          <TableHead>
            <TableRow>
              <TableCell>회사명</TableCell>
              <TableCell align="right">종목코드</TableCell>
              <TableCell align="right">시가</TableCell>
              <TableCell align="right">등락율</TableCell>
              <TableCell align="right">예측</TableCell>
              <TableCell style={{ paddingRight: '20px' }} align="center">
                상세보기
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" align="left">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.code}</TableCell>
                    <TableCell align="right">{row.open}</TableCell>
                    <TableCell align="right">{row.rate}</TableCell>
                    <TableCell align="right">
                      {row.predictpoint == 0 && (
                        <DownIcon size={'1.5rem'} title="down" />
                      )}

                      {row.predictpoint == 1 && (
                        <UpIcon size={'1.5rem'} title="up" />
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Link
                        to={{
                          pathname: 'stockdetail',
                          state: {
                            name: row.name,
                            code: row.code,
                            country: row.country,
                            currentprice: row.open,
                            index: params.index.toUpperCase(),
                          },
                        }}
                      >
                        <ZoomIcon size={'1.5rem'} title="detail" />
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
