# Realty publishing workflow
Repository: ashersoutherncities-art/southern-cities-realty. Production branch: main. Vercel project: southern-cities-realty.
1. Read app/blog/posts.ts and the existing articles to avoid duplication. Choose a distinct researched topic. Do not publish merely to fill a quota.
2. Verify current original sources, jurisdiction and dates. Write original practical guidance; cite source links adjacent to claims. Never invent market data, professional review, outcomes, legal rights or investment returns.
3. Create app/blog/<unique-slug>/page.tsx. Follow existing article structure: Metadata title/description/canonical/OpenGraph, one h1, category/date/realistic reading time, summary, anchored sections, actionable checklist, sources, caveats, relevant CTA and back link. Keep published pages stable.
4. Append matching metadata to app/blog/posts.ts. Only published articles belong in this list. The directory automatically handles search/category filters/sorting. Do not publish placeholder pages for planned topics.
5. Check TypeScript and production build. Use the latest main tree and compare-and-swap expected SHA when committing through GitHub; never overwrite concurrent edits. Only change article and listing files unless separately authorized.
6. Push only within authorized recurring publishing scope. Main auto-deploys via Vercel. Verify the deployment for that exact commit is READY, then verify article and index on southerncitiesrealty.com. Report failure honestly; do not schedule duplicate deploys.
7. Preserve all private tool gates and unrelated code. No lead forms, contact submissions, fabricated authorship or permission changes.
Connector path: GitHub fetch (branch/current tree), fetch_file, create_tree(base tree), create_commit(parent current head), update_ref(expected SHA); Vercel list_deployments(sha), get_deployment and build logs. No new paid services required.
