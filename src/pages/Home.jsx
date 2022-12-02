import React, { useMemo, useState, useEffect } from "react";
import { Products } from "../components";
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import tw from "twin.macro";

const AppContainer = tw.div`
  w-full
  max-w-full
  flex
  flex-col
  items-center
  justify-center
  pt-6
  pb-10
  pl-10
  pr-10
`;

const Title = tw.h1`
  text-2xl
  font-semibold
`;


export default function Home() {
    return (
        <AppContainer>
            <Title>LOGS</Title>
            <Products />
        </AppContainer>

    )
}
