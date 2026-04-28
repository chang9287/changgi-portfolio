const dataModules = import.meta.glob('@/content/projects/*/data.ts', {eager: true});
const mdModules = import.meta.glob('@/content/projects/*/index.md', {eager: true});