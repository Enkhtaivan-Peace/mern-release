import React from 'react'
import { Grid } from '@/components/ui/containers/grid/Grid'
import StaticCircles from './StaticCircles'
import DynamicCircles from './DynamicCircles'
import './trigonometry.scss'
import DotList from './DotList'
function TrigonoMetryPage() {
    return (
        <Grid className="min-h-screen place-items-center">
            <StaticCircles />
            <DynamicCircles />
            <DotList />
        </Grid>
    )
}

export default TrigonoMetryPage
