import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styled from 'styled-components';

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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export class companyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const token = sessionStorage.getItem('access_token');
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
        this.setState({
          data: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">code</TableCell>
              <TableCell align="right">open</TableCell>
              <TableCell align="right">rate</TableCell>
              <TableCell align="right">predict</TableCell>
              <TableCell style={{ paddingRight: '60px' }} align="right">
                Department
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((p, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {p.id}
                  </TableCell>
                  <TableCell align="right">{p.name}</TableCell>
                  <TableCell align="right">{p.code}</TableCell>
                  <TableCell align="right">{p.open}</TableCell>
                  <TableCell align="right">{p.rate}</TableCell>
                  <TableCell align="right">
                    {p.predictpoint == 0 && (
                      <DownIcon size={'1.5rem'} title="down" />
                    )}

                    {p.predictpoint == 1 && (
                      <UpIcon size={'1.5rem'} title="up" />
                    )}
                  </TableCell>
                  <TableCell
                    style={{ paddingRight: '114px' }}
                    align="right"
                  ></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default companyTable;
