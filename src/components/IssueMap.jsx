import { useState } from "react"

function IssueMap() {
  const [issues] = useState([
    {
      id: 1,
      title: "Daryo bo'yidagi chiqindilar",
      location: "Toshkent, Chilonzor tumani",
      status: "open",
      severity: "high",
      date: "2023-12-15",
      description: "Daryo bo'yida ko'p miqdorda plastik chiqindilar to'planib qolgan. Tozalash ishlari kerak.",
      volunteers: 3,
    },
    {
      id: 2,
      title: "Bog'dagi qurib qolgan daraxtlar",
      location: "Samarqand, Universitet bog'i",
      status: "in-progress",
      severity: "medium",
      date: "2023-12-10",
      description: "Bog'dagi ayrim daraxtlar qurib qolgan. Ularni almashtirish va yangi ko'chatlar ekish kerak.",
      volunteers: 5,
    },
    {
      id: 3,
      title: "Noqonuniy daraxt kesish",
      location: "Buxoro, Markaziy ko'cha",
      status: "resolved",
      severity: "high",
      date: "2023-12-05",
      description: "Noqonuniy daraxt kesish holati aniqlandi. Muammo hal qilindi va yangi daraxtlar ekildi.",
      volunteers: 8,
    },
  ])

  const getStatusBadge = (status) => {
    switch (status) {
      case "open":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Ochiq
          </span>
        )
      case "in-progress":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Jarayonda
          </span>
        )
      case "resolved":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Hal qilingan
          </span>
        )
      default:
        return <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-800">{status}</span>
    }
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
          <div className="text-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto mb-2 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-500">Xarita ko'rinishi</p>
          </div>
        </div>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {issues.map((issue) => (
            <div key={issue.id} className="border-l-4 border-l-green-600 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{issue.title}</h3>
                  {getStatusBadge(issue.status)}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {issue.location}
                </div>
                <p className="text-sm mt-2">{issue.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-xs text-gray-500">{issue.volunteers} volontyor qatnashgan</div>
                  <button
                    className={`px-3 py-1 text-sm font-medium rounded-md ${
                      issue.status === "resolved"
                        ? "border border-gray-300 text-gray-700"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {issue.status === "resolved" ? "Batafsil" : "Yordam berish"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium">
          Yangi muammoni xabar qilish
        </button>
      </div>
    </div>
  )
}

export default IssueMap
