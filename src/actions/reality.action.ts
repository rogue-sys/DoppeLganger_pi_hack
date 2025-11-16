"use server";

import { generateReality } from "@/actions/quantumConfig.action";
import { connectDB } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface RealityInput {
    archetype: string;
    universeFocus: string;
    corePersonality: string;
}

export async function createReality(data: RealityInput) {

    let id;
    try {
        await connectDB();

        const { archetype, universeFocus, corePersonality } = data;
        if (!archetype || !universeFocus || !corePersonality) {
            return { success: false, error: "Missing required fields" };
        }

        const result = await generateReality({ archetype, universeFocus, corePersonality });

        id = result?.realityId;
        if (!id) {
            return result
        }
    } catch (err: any) {
        return { success: false, error: err.message };
    }

    revalidatePath('/');
    redirect(`/realities/${id}`)
}
