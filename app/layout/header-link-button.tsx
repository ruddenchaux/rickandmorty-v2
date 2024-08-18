'use client';
import { Button } from '@mui/material';
import { usePathname } from 'next/navigation';
import { type ItemMenu } from './items-menu';

type HeaderLinkProps = {
  item: ItemMenu;
};

export default function HeaderLinkButton({ item }: HeaderLinkProps) {
  const pathname = usePathname();

  return (
    <Button
      color={pathname === item.to ? 'primary' : 'secondary'}
      size="small"
      startIcon={<item.icon />}
    >
      {item.label}
    </Button>
  );
}
