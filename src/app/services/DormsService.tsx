// src/services/DormsService.tsx
export type DormDetail = {
  points: number;
  students: string[];
};

export async function fetchDormDetails(dormId: string): Promise<DormDetail> {
  console.log("fetchDormDetails", dormId);
  const response = await fetch(
    `https://hogwart.paulupa.com/api/dorms/${dormId}`
  );
  console.log(`https://hogwart.paulupa.com/api/dorms/${dormId}`)
  console.log("fetchDormDetails response", response);
  if (!response.ok) {
    throw new Error("Failed to fetch dorm details");
  }
  const data = await response.json();
  return {
    points: data.dorm_score || 0,
    students: data.students || [],
  };
}

export async function updateDormPoints(
  dormId: string,
  dormScore: number,
  operation: "add" | "multiply"
): Promise<void> {
  const response = await fetch(
    `https://hogwart.paulupa.com/api/dorms/${dormId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dormScore, operation }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update points");
  }
}
