import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import './index.scss';
import useStyles from './styles';
export default function Details(props) {
    const { title } = props;
    const classes = useStyles();
    return (
        <Card className={title === "Income" ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent className="detail-content">
                <Typography variant="h5" className="detail-amount">$50</Typography>
                {/* <Doughnut data="data" /> */}
            </CardContent>
        </Card>
    )
}
