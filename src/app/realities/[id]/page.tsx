"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SingleRealityPage() {
  const params = useParams();
  const router = useRouter();
  const [reality, setReality] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReality = async () => {
      try {
        const res = await fetch(`/api/get-realities/${params.id}`);
        const data = await res.json();
        console.log("Single reality page fetched data:", data);

        if (data.success) {
          setReality(data.data);
        } else {
          toast.error(data.error || "Failed to fetch reality");
        }
      } catch (err) {
        console.error(err);
        toast.error("Server call failed");
      } finally {
        setLoading(false);
      }
    };

    fetchReality();
  }, [params.id]);

  if (loading)
    return (
      <p className="text-center mt-20 text-purple-300">Loading...</p>
    );

  if (!reality)
    return (
      <p className="text-center mt-20 text-purple-300">Reality not found</p>
    );

  const r = reality.generatedProfile;

  const Card = ({ title, children }: any) => (
    <div className="bg-[#1c0b2b] border border-purple-600/40 rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-semibold text-purple-300 mb-2">{title}</h3>
      <div className="text-purple-100 text-sm">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0b0615] text-purple-200 px-6 py-10">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-purple-700 rounded hover:bg-purple-800 text-sm"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-[#140a22] border border-purple-700/40 rounded-2xl p-6 shadow-xl">
          <p className="text-sm text-purple-400 mb-4">
            Generated on:{" "}
            {new Date(reality.createdAt).toLocaleString()}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Alternate Universe DOB">
              {r.alternate_universe_dob || "N/A"}
            </Card>

            <Card title="Location Coordinates">
              {r.location_coordinates || "N/A"}
            </Card>

            <Card title="Backstory">
              {r.backstory || "N/A"}
            </Card>

            <Card title="Daily Routine">
              {r.daily_routine || "N/A"}
            </Card>

            <Card title="Personality Traits">
              {r.personality_traits?.join(", ") || "N/A"}
            </Card>

            <Card title="Major Achievements">
              {r.major_achievements?.join(", ") || "N/A"}
            </Card>

            <Card title="Strengths">
              {r.strengths?.join(", ") || "N/A"}
            </Card>

            <Card title="Weaknesses">
              {r.weaknesses?.join(", ") || "N/A"}
            </Card>

            <Card title="Friends">
              {r.friends_and_rivals?.friends?.join(", ") || "N/A"}
            </Card>

            <Card title="Rivals">
              {r.friends_and_rivals?.rivals?.join(", ") || "N/A"}
            </Card>

            <Card title="Secrets & Quirks">
              {r.secrets_and_quirks?.join(", ") || "N/A"}
            </Card>

            <Card title="Favorite Quotes">
              {r.favorite_quotes?.join(" | ") || "N/A"}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
