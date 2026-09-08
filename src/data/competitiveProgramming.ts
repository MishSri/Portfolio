export interface CPPlatform {
  id: string
  name: string
  rating: string 
  url?: string 
}

export const cpPlatforms: CPPlatform[] = [
  { id: 'codeforces', name: 'Codeforces', rating: 'Add your rating', url: undefined },
  { id: 'leetcode', name: 'LeetCode', rating: '1623', url: 'https://leetcode.com/u/srijanmishra477/' },
  // { id: 'codechef', name: 'CodeChef', rating: 'Add your rating', url: undefined },
]

export const cpFocus = [
  'Data Structures & Algorithms',
  'Competitive Programming',
  'Problem Solving',
  'Algorithmic Thinking',
]
