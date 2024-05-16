import { Grid } from '@/components/ui/containers/grid/Grid'
import React from 'react'

function StaticCircles() {
    return (
        <Grid id="staticCircle" className="w-[50px] aspect-square bg-slate-400 rounded-full relative">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </Grid>
    )
}

export default StaticCircles
