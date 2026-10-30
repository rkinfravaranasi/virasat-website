import React from "react";
import { prisma } from "@/lib/prisma";
import SettingsManagerClient from "@/components/admin/SettingsManagerClient";

export default async function AdminSettingsPage() {
  const settingsList = await prisma.websiteSetting.findMany();
  const settingsMap: Record<string, string> = {};
  settingsList.forEach((s) => {
    settingsMap[s.key] = s.value;
  });

  return <SettingsManagerClient initialSettings={settingsMap} />;
}
