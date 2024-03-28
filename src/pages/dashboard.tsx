import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartPie,
  mdiChartTimelineVariant,
  mdiGithub,
  mdiMonitorCellphone,
  mdiReload,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import Button from '../components/Button'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import CardBoxWidget from '../components/CardBox/Widget'
// import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import CardBoxTransaction from '../components/CardBox/Transaction'
import { Client, Transaction } from '../interfaces'
import CardBoxClient from '../components/CardBox/Client'
import SectionBannerStarOnGitHub from '../components/Section/Banner/StarOnGitHub'
import CardBox from '../components/CardBox'
import { sampleChartData } from '../components/ChartLineSample/config'
import ChartLineSample from '../components/ChartLineSample'
import NotificationBar from '../components/NotificationBar'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'

const DashboardPage = () => {
  // const { clients } = useSampleClients()
  // const { transactions } = useSampleTransactions()

  const clients =  [
        {
            "id": 19,
            "login": "percy64",
            "name": "Howell Hand",
            "company": "Kiehn-Green",
            "city": "Emelyside",
            "progress": 70,
            "created": "Mar 3, 2023",
            "created_mm_dd_yyyy": "03-03-2023"
        },
        {
            "id": 11,
            "login": "dare.concepcion",
            "name": "Hope Howe",
            "company": "Nolan Inc",
            "city": "Paristown",
            "progress": 68,
            "created": "Dec 1, 2023",
            "created_mm_dd_yyyy": "12-01-2023"
        },
        {
            "id": 32,
            "login": "geovanni.kessler",
            "name": "Nelson Jerde",
            "company": "Nitzsche LLC",
            "city": "Jailynbury",
            "progress": 49,
            "created": "May 18, 2023",
            "created_mm_dd_yyyy": "05-18-2023"
        },
        {
            "id": 22,
            "login": "macejkovic.dashawn",
            "name": "Kim Weimann",
            "company": "Brown-Lueilwitz",
            "city": "New Emie",
            "progress": 38,
            "created": "May 4, 2023",
            "created_mm_dd_yyyy": "05-04-2023"
        },
        {
            "id": 34,
            "login": "hilpert.leora",
            "name": "Justice O'Reilly",
            "company": "Lakin-Muller",
            "city": "New Kacie",
            "progress": 38,
            "created": "Mar 27, 2023",
            "created_mm_dd_yyyy": "03-27-2023"
        },
        {
            "id": 48,
            "login": "ferry.sophia",
            "name": "Adrienne Mayer III",
            "company": "Kozey, McLaughlin and Kuhn",
            "city": "Howardbury",
            "progress": 39,
            "created": "Mar 29, 2023",
            "created_mm_dd_yyyy": "03-29-2023"
        },
        {
            "id": 20,
            "login": "gokuneva",
            "name": "Mr. Julien Ebert",
            "company": "Cormier LLC",
            "city": "South Serenaburgh",
            "progress": 29,
            "created": "Jun 25, 2023",
            "created_mm_dd_yyyy": "06-25-2023"
        },
        {
            "id": 47,
            "login": "paolo.walter",
            "name": "Lenna Smitham",
            "company": "King Inc",
            "city": "McCulloughfort",
            "progress": 59,
            "created": "Oct 8, 2023",
            "created_mm_dd_yyyy": "10-08-2023"
        },
        {
            "id": 24,
            "login": "lkessler",
            "name": "Travis Davis",
            "company": "Leannon and Sons",
            "city": "West Frankton",
            "progress": 52,
            "created": "Oct 20, 2023",
            "created_mm_dd_yyyy": "10-20-2023"
        },
        {
            "id": 49,
            "login": "shana.lang",
            "name": "Prof. Esteban Steuber",
            "company": "Langosh-Ernser",
            "city": "East Sedrick",
            "progress": 34,
            "created": "May 16, 2023",
            "created_mm_dd_yyyy": "05-16-2023"
        },
        {
            "id": 36,
            "login": "jewel07",
            "name": "Russell Goodwin V",
            "company": "Nolan-Stracke",
            "city": "Williamsonmouth",
            "progress": 55,
            "created": "Apr 22, 2023",
            "created_mm_dd_yyyy": "04-22-2023"
        },
        {
            "id": 33,
            "login": "burnice.okuneva",
            "name": "Ms. Cassidy Wiegand DVM",
            "company": "Kuhlman-Hahn",
            "city": "New Ruthiehaven",
            "progress": 76,
            "created": "Sep 16, 2023",
            "created_mm_dd_yyyy": "09-16-2023"
        },
        {
            "id": 44,
            "login": "oconnell.juanita",
            "name": "Mr. Watson Brakus PhD",
            "company": "Osinski, Bins and Kuhn",
            "city": "Lake Gloria",
            "progress": 58,
            "created": "Jun 22, 2023",
            "created_mm_dd_yyyy": "06-22-2023"
        },
        {
            "id": 46,
            "login": "vgutmann",
            "name": "Mr. Garrison Friesen V",
            "company": "VonRueden, Rippin and Pfeffer",
            "city": "Port Cieloport",
            "progress": 39,
            "created": "Oct 19, 2023",
            "created_mm_dd_yyyy": "10-19-2023"
        },
        {
            "id": 14,
            "login": "veum.lucio",
            "name": "Ms. Sister Morar",
            "company": "Gusikowski, Altenwerth and Abbott",
            "city": "Lake Macville",
            "progress": 34,
            "created": "Jun 11, 2023",
            "created_mm_dd_yyyy": "06-11-2023"
        },
        {
            "id": 40,
            "login": "edietrich",
            "name": "Ms. Laisha Reinger",
            "company": "Boehm PLC",
            "city": "West Alexiemouth",
            "progress": 73,
            "created": "Nov 2, 2023",
            "created_mm_dd_yyyy": "11-02-2023"
        },
        {
            "id": 5,
            "login": "mose44",
            "name": "Cameron Lind",
            "company": "Tremblay, Padberg and Pouros",
            "city": "Naderview",
            "progress": 59,
            "created": "Sep 14, 2023",
            "created_mm_dd_yyyy": "09-14-2023"
        },
        {
            "id": 43,
            "login": "rau.abelardo",
            "name": "Sarai Little",
            "company": "Deckow LLC",
            "city": "Jeanieborough",
            "progress": 49,
            "created": "Jun 13, 2023",
            "created_mm_dd_yyyy": "06-13-2023"
        },
        {
            "id": 2,
            "login": "imurazik",
            "name": "Shyann Kautzer",
            "company": "Osinski, Boehm and Kihn",
            "city": "New Alvera",
            "progress": 41,
            "created": "Feb 15, 2023",
            "created_mm_dd_yyyy": "02-15-2023"
        },
        {
            "id": 15,
            "login": "annalise97",
            "name": "Lorna Christiansen",
            "company": "Altenwerth-Friesen",
            "city": "Port Elbertland",
            "progress": 36,
            "created": "Mar 9, 2023",
            "created_mm_dd_yyyy": "03-09-2023"
        }
    ]

  const transactions =  [
        {
            "amount": 375.53,
            "account": "45721474",
            "name": "Home Loan Account",
            "date": "3 days ago",
            "type": "deposit",
            "business": "Turcotte"
        },
        {
            "amount": 470.26,
            "account": "94486537",
            "name": "Savings Account",
            "date": "3 days ago",
            "type": "payment",
            "business": "Murazik - Graham"
        },
        {
            "amount": 971.34,
            "account": "63189893",
            "name": "Checking Account",
            "date": "5 days ago",
            "type": "invoice",
            "business": "Fahey - Keebler"
        },
        {
            "amount": 374.63,
            "account": "74828780",
            "name": "Auto Loan Account",
            "date": "7 days ago",
            "type": "withdrawal",
            "business": "Collier - Hintz"
        }
    ]

  const clientsListed = clients.slice(0, 4)

  const [chartData, setChartData] = useState(sampleChartData())

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault()

    setChartData(sampleChartData())
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
          <Button
            href="https://github.com/justboil/admin-one-react-tailwind"
            target="_blank"
            icon={mdiGithub}
            label="Star on GitHub"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            trendLabel="12%"
            trendType="up"
            trendColor="success"
            icon={mdiAccountMultiple}
            iconColor="success"
            number={512}
            label="Clients"
          />
          <CardBoxWidget
            trendLabel="16%"
            trendType="down"
            trendColor="danger"
            icon={mdiCartOutline}
            iconColor="info"
            number={7770}
            numberPrefix="$"
            label="Sales"
          />
          <CardBoxWidget
            trendLabel="Overflow"
            trendType="warning"
            trendColor="warning"
            icon={mdiChartTimelineVariant}
            iconColor="danger"
            number={256}
            numberSuffix="%"
            label="Performance"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col justify-between">
            {transactions.map((transaction: Transaction) => (
              <CardBoxTransaction key={transaction.id} transaction={transaction} />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            {clientsListed.map((client: Client) => (
              <CardBoxClient key={client.id} client={client} />
            ))}
          </div>
        </div>

        <div className="my-6">
          <SectionBannerStarOnGitHub />
        </div>

        <SectionTitleLineWithButton icon={mdiChartPie} title="Trends overview">
          <Button icon={mdiReload} color="whiteDark" onClick={fillChartData} />
        </SectionTitleLineWithButton>

        <CardBox className="mb-6">{chartData && <ChartLineSample data={chartData} />}</CardBox>

        <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Clients" />

        <NotificationBar color="info" icon={mdiMonitorCellphone}>
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar>

        <CardBox hasTable>
          <TableSampleClients />
        </CardBox>
      </SectionMain>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DashboardPage
