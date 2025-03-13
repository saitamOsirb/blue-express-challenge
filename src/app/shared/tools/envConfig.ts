import { loadEnvConfig } from '@next/env'
import fs from 'fs';
import useSWR from 'swr'
const projectDir = process.cwd()
loadEnvConfig(projectDir)