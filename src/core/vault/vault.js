// src/core/vault/vault.js
import { open } from '@tauri-apps/plugin-dialog';
import { exists, mkdir } from '@tauri-apps/plugin-fs';
import { join } from '@tauri-apps/api/path';

const KEY = 'NoteMakingApp.workspace.path';

export function getSavedWorkspacePath() {
  return localStorage.getItem(KEY);
}
export function saveWorkspacePath(p) {
  localStorage.setItem(KEY, p);
}

export async function pickParentDirectory() {
  // Choose where to create the new workspace folder
  const parent = await open({
    directory: true,
    multiple: false,
    title: 'Choose a location for your workspace'
  });
  return parent || null;
}

export async function createWorkspaceAt(parentDir, workspaceName) {
  const workspacePath = await join(parentDir, workspaceName);

  if (!(await exists(workspacePath))) {
    await mkdir(workspacePath, { recursive: true });
  }

  // mandatory internal folder
  const NoteMakingAppHidden = await join(workspacePath, '.NoteMakingApp');
  if (!(await exists(NoteMakingAppHidden))) {
    await mkdir(NoteMakingAppHidden, { recursive: true });
  }

  // a place for notes right away
  const notesDir = await join(workspacePath, 'notes');
  if (!(await exists(notesDir))) {
    await mkdir(notesDir, { recursive: true });
  }

  // future: attachments, templates, cache, etc.
  return { workspacePath, NoteMakingAppHidden, notesDir };
}

export async function pickExistingWorkspace() {
  const dir = await open({
    directory: true,
    multiple: false,
    title: 'Open existing workspace'
  });
  if (!dir) return null;

  // ensure .NoteMakingApp exists (initialize if missing)
  const NoteMakingAppHidden = await join(dir, '.NoteMakingApp');
  if (!(await exists(NoteMakingAppHidden))) {
    await mkdir(NoteMakingAppHidden, { recursive: true });
  }
  return dir;
}