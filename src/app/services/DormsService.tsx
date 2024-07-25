// src/services/DormsService.tsx
export type DormDetail = {
  points: number;
  students: string[];
};

export async function fetchDormDetails(dormId: string): Promise<DormDetail> {
  const response = await fetch(`http://3.34.19.176:8080/api/dorms/${dormId}`);
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
  const response = await fetch(`http://localhost:8080/api/dorms/${dormId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dormScore, operation }),
  });

  if (!response.ok) {
    throw new Error("Failed to update points");
  }
}
