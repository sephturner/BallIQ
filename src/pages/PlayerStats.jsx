import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Flex } from '@chakra-ui/react';

function PlayerStats({ data }) {
  return (
    <Box px={8} height="100vh" display="flex" flexDirection="column" justifyContent="top" alignItems="center" bgGradient="linear(to-br, blackAlpha.800, blackAlpha.900)" boxShadow="md">
      <Flex textAlign="center" align="center" justify="center" width="75%" textColor="whiteAlpha.700" py={2} my={4} mx="auto" borderRadius={24}>
        <Heading as="h1" fontSize={48} px={8} textDecoration="underline">
          {data[0].Player} Statistics
        </Heading>
        <img src="./basketball-2.webp" alt="Ball-IQ Logo" width={64} height={64} />
      </Flex>
      <Table textAlign="center">
        <Thead>
          <Tr>
            <Th color="orange.600" textAlign="center">Season</Th>
            <Th color="orange.600" textAlign="center">PTS</Th>
            <Th color="orange.600" textAlign="center">AST</Th>
            <Th color="orange.600" textAlign="center">REB</Th>
            <Th color="orange.600" textAlign="center">TOV</Th>
            <Th color="orange.600" textAlign="center">FG%</Th>
            <Th color="orange.600" textAlign="center">2P%</Th>
            <Th color="orange.600" textAlign="center">3P%</Th>
            <Th color="orange.600" textAlign="center">FT%</Th>
            <Th color="orange.600" textAlign="center">eFG%</Th>
            <Th color="orange.600" textAlign="center">Shooter Grade</Th>
          </Tr>
        </Thead>
        <Tbody bgColor="whiteAlpha.700">
          {data.map((item, index) => (
            <Tr key={index} borderWidth={0}>
              <Td textAlign="center">{item.Season}</Td>
              <Td textAlign="center">{item.PTS}</Td>
              <Td textAlign="center">{item.AST}</Td>
              <Td textAlign="center">{item.REB}</Td>
              <Td textAlign="center">{item.TOV}</Td>
              <Td textAlign="center">{item.FGPercentage}%</Td>
              <Td textAlign="center">{item.TwoPPercentage}%</Td>
              <Td textAlign="center">{item.ThreePPercentage}%</Td>
              <Td textAlign="center">{item.FTPercentage}%</Td>
              <Td textAlign="center">{item.eFGPercentage}%</Td>
              <Td textAlign="center">{item.ShooterGrade}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PlayerStats;