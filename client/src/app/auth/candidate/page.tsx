"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";

import { useUser } from "@/hooks/use-context";

import CandidateForm from "@/components/custom/CreateProfile/Candidate";

export default function CandidateRegistrationPage() {
  const { isCandidateLoading, userAsCandidate } = useUser();

  if (isCandidateLoading)
    return (
      <div className="w-full min-h-[650px] max-w-3xl flex justify-center items-center mx-auto bg-transparent p-8 rounded-lg shadow-lg">
        <Loader2 className="animate-spin size-24 text-primary" />
      </div>
    );

  return userAsCandidate && !(userAsCandidate.status === "NotVer") ? (
    <div className="w-full min-h-[650px] max-w-3xl flex items-start flex-col justify-center md:items-center mx-auto  bg-transparent p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl text-primary text-center">
        You have already been registered as a Candidate
      </h2>
      <Link
        href="/candidates"
        className="mt-8 mx-auto bg-primary rounded-md text-center py-2 px-4 hover:bg-[#129992] text-white transition-colors duration-200"
      >
        View Candidate List
      </Link>
    </div>
  ) : (
    <CandidateForm />
  );
}
