import { Wrapper } from '@/components/ui/containers/Wrapper'
import { Flex, FlexCluster, Flexible } from '@/components/ui/containers/flex/Flex'
import { AutoGridContainer, AutoGrid, Grid, ReelGrid } from '@/components/ui/containers/grid/Grid'
import ExampleList from '@/features/example/ExampleList'
import React from 'react'

const ContainersPage = () => {
    return (
        <Flex className="flex-col gap-20">
            <Wrapper className=" bg-slate-100">
                <h3>Wrapper component:</h3>
            </Wrapper>

            <h3 className="mt-20 text-red-300">Grid Component</h3>
            <Grid className="gap-10 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
                <ExampleList />
            </Grid>
            <h3 className="mt-20 text-red-300">Auto Grid Component</h3>
            <AutoGrid>
                <ExampleList />
            </AutoGrid>
            <h3 className="mt-20 text-red-300">Auto Grid Container Component</h3>
            <AutoGridContainer>
                <ExampleList />
            </AutoGridContainer>
            <h3 className="mt-20 text-red-300">ReelGrid Component</h3>
            <ReelGrid>
                <ExampleList />
            </ReelGrid>
            <h3 className="mt-20 text-red-300">FlexCluster Component</h3>
            <FlexCluster>
                <ExampleList />
            </FlexCluster>
            <h3 className="mt-20 text-red-300">Flexible Component</h3>
            <Flexible>
                <ExampleList />
            </Flexible>
        </Flex>
    )
}

export default ContainersPage
