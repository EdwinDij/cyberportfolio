"use client";
import React from "react";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  type: "success" | "error" | "warning";
  text: string;
};

const icons = {
  success: <CheckCircle className="text-green-400 w-5 h-5" />,
  error: <XCircle className="text-red-500 w-5 h-5" />,
  warning: <AlertTriangle className="text-yellow-400 w-5 h-5" />,
};

const bgColors = {
  success: "bg-green-900/20 border-green-400/50",
  error: "bg-red-900/20 border-red-500/50",
  warning: "bg-yellow-900/20 border-yellow-400/50",
};

export const FeedbackMessage = ({ type, text }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`w-full border-l-4 rounded-r-lg p-4 flex items-start space-x-4 ${bgColors[type]}`}
    >
      <div className="mt-1">{icons[type]}</div>
      <p className="text-sm text-white">{text}</p>
    </motion.div>
  );
};
