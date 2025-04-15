"use client";

import React from 'react'
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import "react-quill-new/dist/quill.snow.css";


const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const JournalEntryPage = () => {
  return (
    <div className='py-8'>
      <form action="">
      <h1 className="text-5xl md:text-6xl gradient-title">
          "What's on your mind?"
        </h1>
        {/* <h1 className="text-5xl md:text-6xl gradient-title">
          {isEditMode ? "Edit Entry" : "What's on your mind?"}
        </h1> */}
      </form>

    </div>
  )
}

export default JournalEntryPage