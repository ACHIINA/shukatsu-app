const { contextBridge, ipcRenderer } = require('electron')

// Expose safe APIs to renderer process
contextBridge.exposeInMainWorld('api', {
  // Auto-registration: launch browser and fill form
  autoRegister: (url, profile) => ipcRenderer.invoke('auto-register', url, profile),
  // Gmail: fetch recent emails from job hunting companies
  fetchEmails: () => ipcRenderer.invoke('fetch-emails'),
  // Schedule: save/load schedule data
  saveSchedule: (data) => ipcRenderer.invoke('save-schedule', data),
  loadSchedule: () => ipcRenderer.invoke('load-schedule'),
  // AI research: research a company
  researchCompany: (name) => ipcRenderer.invoke('research-company', name),
  // ES: generate draft
  generateEsDraft: (question, profile) => ipcRenderer.invoke('generate-es-draft', question, profile),
})
