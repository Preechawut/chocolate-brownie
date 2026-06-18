import { repos } from '@/content/data'
import { RepoCard } from './RepoCard'

export function Repos() {
  return (
    <div className="flex flex-col gap-3">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}
