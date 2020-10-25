import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'id', label: 'id', minWidth: 170 },
  { id: 'message', label: 'message', minWidth: 100 },
  {
    id: 'positive',
    label: 'positive',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'negative',
    label: 'negative',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'compound',
    label: 'compound',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(id, message, positive, negative) {
  const compound = positive + negative;
  return { id, message, positive, negative, compound };
}

const messages = [
  'islam worst religion arab hate',
  'women Muslim not good',
  'ban Islam',
  'Muslims are terrorists',
  "islam worst religion arab hate",
  "RT @ensine: All #muslim rulers were savages bcoz #islamIsTheProblem, even profeet himself \n#TyrantTipu \nhttps://t.co/RqR4778Alr",
  "RT @Private34349909: @AmyMek @Dab7One 1/ @realDonaldTrump @seanhannity @TuckerCarlson PLEASE #BanIslam \u0026amp; #DeportALLmuslims They do NOT meet…",
  "RT @PoliticalIslam: Educate yourself! #RT https://t.co/bYZOofbMjI #STOPIslam #BillWarnerPhD @PoliticalIslam #MakeDCListen #BanSharia #CSPI",
  "RT @ensine: All #muslim rulers were savages bcoz #islamIsTheProblem, even profeet himself \n#TyrantTipu \nhttps://t.co/RqR4778Alr",
  "RT @SteersMann: Say, @CanadianPM @liberal_party, these the type of people you - \u0026amp; Iqra Khalid - want to welcome with open arms? Time to #Ba…",
  "#BanIslam\n#TravelBan\n#BuildTheWall\n#ShariaResistance\n#AntiPedoZone\n#ProtectKids\n#MAGA\n#MASA https://t.co/cdTh5P0HFO",
  "#DEATHWISH #UK police produce pro-izlam propaganda vid featuring #hamASS linked group https://t.co/QMsFiHzzNg #BANiSLAM",
  "https://t.co/8ECydgsbMn #racist ? #AltLeft #dianeabbott false statements about #Rotherham #childtrafficking \napplauded. #islamistheproblem",
  "Say, @CanadianPM @JustinTrudeau @liberal_party, some more people 2 put at head of immigration queue? Too \"Islamopho… https://t.co/hS3QSOuwQ1",
  "RT @REALtrumpbureau: #ISLAMISTHEPROBLEM❌\n#BANISLAMinAMERICA\n@V_of_Europe\n🇫🇷 Prominent #Muslim propagandist #TariqRamadan accused of RAPE ht…",
  "RT @ensine: Another reason KHANgressi govt must #BanTippuJayanti \n#TyrantTipu #Muslims #Islam #IslamIsTheProblem https://t.co/rqhLsTF5Sd",
  "3 Things About Islam (video share) #BillWarnerPhD #RT https://t.co/g7dswVbQmm #STOPIslam @PoliticalIslam #MakeDCListen #BanSharia #CSPI",
  "#DefendEurope #FreedomFight #BanIslam #FreedomFromEu #StopMigration #RefugeesNotWelcome https://t.co/446r0JJMkc",
  "#Sweden LOVES #Islam \n\nHow's letting in the rapefugees workin for ya? #BanIslam #DuesVult https://t.co/MP5w1wmVrN",
  "#fedidwgugl #CDU #SPD @cducsubt @spdbt #Stopislam #Islamistheproblem https://t.co/O6ll0NqtOX",
  "@paulwestonlibgb #STOPIslam \n#BANIslam\n#FUCKIslam\n#DESTROYIslam\nWhat do you choose?\nThe choice is yours...",
  "RT @Hannesz1956: @Stormtroepen @cdavandaag @sybrandbuma @gertjansegers @fvdemocratie Yep. Het staat er zwart op wit. En het is toegestaan v…",
  "@borneostraat455 @OmSionsWil Ja. Dit zegt dus genoeg. #banislam",
  "Billions for border security or this on the cheap? Video. #RT https://t.co/e9xbrXnhNN #BanSharia #tcot #MakeDCListen https://t.co/Fvqot8tC41",
  "RT @flgal4trump: #ISupportPresidentTrump   #Trump2020 #1A #2A #AmericaFirst #BanIslam https://t.co/UnvzUWcDc6",
  "#BanIslam - cult - brainwashed from birth - no assimilation into society - mutants! https://t.co/dFTUhw0ibI",
  "RT if u r for the Constitution! #RT https://t.co/9qYD1pmBUr #StopIslam #TCOT @PoliticalIslam #MakeDCListen #BanSharia",
  "Islam constantly attacking Europe! RT https://t.co/BYa8zlmW4e #STOPIslam #BillWarnerPhD #PoliticalIslam #CSPI #BanSharia",
  "ISIS is Big Business! #RT https://t.co/D6Z5uSI7fT #STOPIslam @DianeSori #MakeDCListen #BanSharia @PoliticalIslam",
  "RT @flgal4trump: #ISupportPresidentTrump   #Trump2020 #1A #2A #AmericaFirst #BanIslam https://t.co/UnvzUWcDc6",
];

const positives = [43, 24, 18, 28, 25, 25, 25, 50, 43, 42, 10, 26, 48, 19, 40, 44, 13, 2, 36, 25, 30, 23, 28, 47, 26, 34, 39, 9, 25, 10]
const negatives = [-85, -57, -37, -72, -61, -80, -39, -77, -85, -64, -69, -54, -42, -70, -39, -47, -84, -59, -93, -64, -51, -53, -42, -87, -82, -45, -76, -86, -88, -46]

const rows = [];

for (let idx = 0; idx < messages.length; idx += 1) {
  rows.push(createData(idx + 1, messages[idx], positives[idx], negatives[idx]))
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function MsgTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.message}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}