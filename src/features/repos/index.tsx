import { repos } from '@/content/data'
import { RepoCard } from './RepoCard'

export function Repos() {
  return (
    <div>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}
