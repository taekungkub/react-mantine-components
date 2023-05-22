<!-- class -->

const useStyles = createStyles((theme) => ({
navbar: {
backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],

"&:hover": {
color: theme.colors.blue[4],
},
},
}));

const { classes , cx} = useStyles();

interface Props {
children:React.ReactNode
}
