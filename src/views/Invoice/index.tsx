import React from "react";
import "./index.scss";
import { Box, Button, Card, Divider, Flex, Grid, Text } from "@mantine/core";

type Props = {};

export default function InvoicePage({}: Props) {
  return (
    <>
      <div>
        <Card withBorder>
          <Card.Section inheritPadding py={"md"}>
            <Box p={"sm"}>
              {/* <Grid.Col sm={24}>
                <Text fw={500} fz={"lg"} style={{ float: "right" }}>
                  #123456
                </Text>
                <Divider my={14} />
              </Grid.Col> */}

              <Box>
                <Text fw={500} fz={"lg"} style={{ float: "right" }}>
                  #123456
                </Text>
                <Text fz={"lg"} fw={500}>
                  Logo
                </Text>
              </Box>
              <Divider my={20} />

              <Flex justify={"space-between"} w={"100%"} mb={12}>
                <Box>
                  <address>
                    <strong>Billed To:</strong>
                    <br />
                    John Smith <br />
                    1234 Main <br />
                    Apt. 4B <br />
                    Springfield, ST 54321
                  </address>
                </Box>
                <Box>
                  <address>
                    <strong>Shipped To:</strong>
                    <br />
                    Kenny Rigdon <br />
                    1234 Main <br />
                    Apt. 4B <br />
                    Springfield, ST 54321
                  </address>
                </Box>
              </Flex>
            </Box>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: "70px" }}>No.</th>
                    <th style={{ textAlign: "left" }}>Item</th>
                    <th style={{ textAlign: "right" }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>
                      <Text>White Backpack</Text>
                      <Text fz={"sm"} mb={4} mt={4}>
                        <span>color: </span>
                        <span>White</span>
                      </Text>
                      <Text fz={"sm"} mb={4}>
                        <span>size: </span>
                        <span>One size</span>
                      </Text>
                    </td>
                    <td style={{ textAlign: "right" }}>$499.00</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>
                      <Text>Strip Analog Watch</Text>
                      <Text fz={"sm"} mb={4} mt={4}>
                        <span>color: </span>
                        <span>White</span>
                      </Text>
                      <Text fz={"sm"} mb={4}>
                        <span>size: </span>
                        <span>One size</span>
                      </Text>
                    </td>
                    <td style={{ textAlign: "right" }}>$399.00</td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>
                      <Text>Beats Solo Headphone</Text>
                      <Text fz={"sm"} mb={4} mt={4}>
                        <span>color: </span>
                        <span>White</span>
                      </Text>
                    </td>
                    <td style={{ textAlign: "right" }}>$499.00</td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "right" }}>
                      <strong> Sub Total</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>$1397.00</td>
                  </tr>
                  <tr className="border-0">
                    <td colSpan={2} style={{ textAlign: "right" }}>
                      <strong>Shipping</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>$13.00</td>
                  </tr>
                  <tr className="border-0">
                    <td colSpan={2} style={{ textAlign: "right" }}>
                      <strong>Total</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <h4 className="m-0">$1410.00</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Flex justify={"end"}>
              <Button color={"yellow"} size={"md"} px={30}>
                Print
              </Button>
            </Flex>
          </Card.Section>
        </Card>
      </div>
    </>
  );
}
