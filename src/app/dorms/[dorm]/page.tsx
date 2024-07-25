// src/app/dorms/[dorm]/page.tsx

import DormDetailPage from './DormDetail';
import { fetchDormDetails, DormDetail } from "../../services/DormsService";

const dormIds: Record<string, number> = {
  gryffindor: 1,
  hufflepuff: 2,
  ravenclaw: 3,
  slytherin: 4,
};

export async function generateStaticParams() {
  const dorms = Object.keys(dormIds);
  return dorms.map(dorm => ({
    dorm,
  }));
}

type PageProps = {
  params: {
    dorm: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { dorm } = params;
  const details = await fetchDormDetails(dormIds[dorm].toString());
  console.log(dorm, details);

  return <DormDetailPage dorm={dorm} details={details} />;
}
