interface stringProps {
  capitalize: () => string;
}

// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function (): string {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
