import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse, NextRequest } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND)

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		console.log(req.body)
		try {
			const { data, error } = await resend.emails.send({
				from: `${req.body.name} <onboarding@resend.dev>`,
				to: ["henriquehermes97@gmail.com"],
				subject: req.body.name,
				html: req.body.message,
			})

			console.log(data, error)
			return NextResponse.json({ error: "Success" }, { status: 200 })
		} catch (error) {
			return NextResponse.json(
				{ error: "Internal Server Error" },
				{ status: 400 }
			)
		}
	} else {
		return NextResponse.json({ error: "Error" }, { status: 500 })
	}
}
