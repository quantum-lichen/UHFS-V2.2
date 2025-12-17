import { Badge, FileNode, RoadmapItem, ArchitectureLayer } from './types';
import { Network, Database, Cpu, HardDrive, Layers, Box, FileCode, Folder } from 'lucide-react';

export const BADGES: Badge[] = [
  { label: 'Version', value: '2.2.0', color: 'bg-neon-cyan', link: '#' },
  { label: 'Tests', value: '100% Passed', color: 'bg-green-500', link: '#' },
  { label: 'IOPS', value: '15M', color: 'bg-blue-600', link: '#' },
  { label: 'NVMe-oF', value: 'Active', color: 'bg-orange-500', link: '#' },
  { label: 'WriteAmp', value: '1.0x', color: 'bg-green-600', link: '#' },
  { label: 'License', value: 'MIT', color: 'bg-yellow-500', link: '#' },
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  { name: 'NVMe-oF Fabric (RDMA)', desc: 'Distributed Transport', color: 'text-neon-cyan', icon: 'Network' },
  { name: 'ACΦ-496 (Knowledge DNA)', desc: 'Semantic Holographic Layer', color: 'text-neon-magenta', icon: 'Database' },
  { name: 'Transmuter FC↔ACΦ', desc: 'Bidirectional Translation', color: 'text-phi-gold', icon: 'Cpu' },
  { name: 'UHFS V2.2 (ZNS + oF)', desc: 'Zone Namespace Storage', color: 'text-neon-cyan', icon: 'HardDrive' },
  { name: 'FC-496 Atoms (64B)', desc: 'Fundamental Quantum Unit', color: 'text-neon-lime', icon: 'Box' },
];

export const REPO_STRUCTURE: FileNode = {
  name: 'uhfs-v2.2',
  type: 'folder',
  isOpen: true,
  children: [
    { name: 'README.md', type: 'file', description: '⭐ Ce fichier' },
    { name: 'requirements.txt', type: 'file', description: '📦 Dépendances' },
    { name: 'uhfs_v22.py', type: 'file', description: '🔺 Core V2.2 (NVMe-oF)' },
    {
      name: 'acphi',
      type: 'folder',
      description: '🧠 ACΦ-496',
      children: [
        { name: '__init__.py', type: 'file' },
        { name: 'codon.py', type: 'file' },
      ]
    },
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'fc496.py', type: 'file', description: '🧲 Atoms' },
        { name: 'transmuter.py', type: 'file', description: '⚙️ Conversion' },
        { name: 'nvmeof.py', type: 'file', description: '🌐 NVMe-oF' },
      ]
    },
    {
      name: 'poc',
      type: 'folder',
      children: [
        { name: 'demo.py', type: 'file', description: '🎮 Distributed Demo' },
        { name: 'benchmark.py', type: 'file', description: '📊 15M IOPS' },
        { name: 'cluster.py', type: 'file', description: '🌐 Multi-node' },
      ]
    },
    {
      name: 'tests',
      type: 'folder',
      description: '✅ 100% Coverage',
      children: [
        { name: 'test_fc496.py', type: 'file' },
        { name: 'test_acphi.py', type: 'file' },
        { name: 'test_uhfs.py', type: 'file' },
        { name: 'test_nvmeof.py', type: 'file' },
      ]
    },
    {
      name: 'docs',
      type: 'folder',
      children: [
        { name: 'nvmeof_architecture.md', type: 'file' },
      ]
    },
    { name: 'LICENSE', type: 'file', description: '📄 MIT' },
  ]
};

export const ROADMAP: RoadmapItem[] = [
  { quarter: '2025', title: 'UHFS V2.2 Launch', desc: '15M IOPS, NVMe-oF, ACΦ-496', completed: true },
  { quarter: 'Q1 2026', title: 'Rust io_uring', desc: 'Real NVMe-oF (RDMA) Implementation', completed: false },
  { quarter: 'Q2 2026', title: 'FPGA Storage', desc: 'H-Scale Offload & Computational Storage', completed: false },
  { quarter: 'Q3 2026', title: 'Global Lichen Net', desc: '10k+ Node Distributed Mesh', completed: false },
  { quarter: 'Future', title: 'UHFS V3.0', desc: 'Quantum Network E8 x NVMe-oF', completed: false },
];
