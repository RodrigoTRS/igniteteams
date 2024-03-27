import { TouchableOpacityProps } from 'react-native';

import { Container, Title, FilterStyleProps } from './styles';

interface FilterProps extends TouchableOpacityProps {
  title: string;
  isActive?: boolean
}

export function Filter({ title, isActive = false, ...props }: FilterProps) {
  return (
    <Container isActive={isActive} {...props}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}