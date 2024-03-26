import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://henriquehermes.com.au",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://henriquehermes.com.au/jobs/wevolt",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://henriquehermes.com.au/jobs/infrati",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://henriquehermes.com.au/jobs/1app",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://henriquehermes.com.au/jobs/darez",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://henriquehermes.com.au/jobs/4all",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	]
}
