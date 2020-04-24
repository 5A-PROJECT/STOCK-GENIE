import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { IconButton } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { Link } from 'react-router-dom';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styled from 'styled-components';
import axios from 'axios';

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

const columns = [
  { id: 'name', label: '회사명', minWidth: 170 },
  { id: 'code', label: '종목코드', minWidth: 100 },
  {
    id: 'currentprice',
    label: '금일시가',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'rate',
    label: '등락율',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'predict',
    label: '예측결과',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'move',
    label: '상세보기',
    align: 'center',
    minwidth: 170,
  },
];

// 상세보기 + 버튼 => 페이지 이동
const plusIcon = (
  <Link to="/stockdetail">
    <ZoomInIcon />
  </Link>
);

function createData(name, code, currentprice, yesterdayprice, predict, move) {
  const rate = ((currentprice - yesterdayprice) / yesterdayprice) * 100;
  const token = sessionStorage.getItem('access_token');
  const info = [];
  axios
    .get(
      'http://localhost:8000/predict/stocktable',
      {
        params: {
          page: 1,
        },
        headers: {
          Authorization: `JWT ${token}`,
        },
      },
      [],
    )
    .then((res) => {
      // info = res.data;
      // console.log(res.data);
      res.data.forEach((stock) => {
        info.push({
          name: stock.name,
          code: stock.code,
          currentprice: stock.open,
          rate: stock.rate,
          predict: stock.predictpoint,
          move: move,
        });
      });
      info.push({
        name,
        code,
        currentprice,
        yesterdayprice,
        rate,
        predict,
        move,
      });
      // console.log(info);
    })
    .catch((e) => {
      console.log(e);
    }, []);

  return info;
}

// 테이블에 내용이 들어가는 부분
const rows = createData('삼성전자', '005930', 50100, 51400, '상승', plusIcon);

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
