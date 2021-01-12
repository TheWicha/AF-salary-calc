import React, { useState } from "react";
import styled from "styled-components";
import CountBrutto from "./CountBrutto";
import CountBruttoBrutto from "./CountBruttoBrutto";
import CountNetto from "./CountNetto";
import Navbar from "./Navbar";

const Main = () => {
  const [radioVal, setRadioVal] = useState("brutto");
  const [inputVal, setInputVal] = useState(0);
  const [netto, setNetto] = useState(0);
  const [brutto, setBrutto] = useState(0);
  const [bruttoBrutto, setBruttoBrutto] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isBolded, setIsBolded] = useState(true);

  const handleValueChange = (e) => {
    e.target.type === "radio" ? setRadioVal(e.target.value) : setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let ubEmerytalne = (inputVal * 9.76) / 100;
    let ubEmerytalne2 = (inputVal * 8.1) / 100;
    let ubRemontowe = (inputVal * 1.5) / 100;
    let ubRemontowe2 = (inputVal * 5.4) / 100;
    let ubChorobowe = (inputVal * 2.45) / 100;
    let ubZdrowotne = inputVal < 600 ? 0 : (inputVal * 7.77) / 100;
    let podatek = inputVal < 1100 ? 0 : (inputVal * 7.02) / 100;
    let ubWypadkowe = (inputVal * 1.39) / 100;
    let FP = (inputVal * 2.03) / 100;
    let FGSP = (inputVal * 0.08) / 100;

    let net = parseInt(inputVal) - ubEmerytalne - ubRemontowe - ubChorobowe - ubZdrowotne - podatek;
    setNetto(net.toFixed(2));
    let brut = (parseInt(inputVal) * 40) / 100 + parseInt(inputVal);
    setBrutto(brut.toFixed(2));

    let kosztPracodawcy =
      parseInt(radioVal === "netto" ? brut : inputVal) + ubEmerytalne2 + ubRemontowe2 + ubWypadkowe + FP + FGSP;
    setBruttoBrutto(kosztPracodawcy.toFixed(2));

    setIsVisible(true);
  };

  return (
    <StyledSection>
      <Navbar />
      <ContentWrapper>
        {!isVisible && (
          <>
            <StyledRadioLabel
              style={{ fontWeight: isBolded ? "bold" : "normal" }}
              onClick={() => {
                setIsBolded(true);
              }}
              htmlFor="brutto"
            >
              brutto
              <input type="radio" name="typ_wynagrodzenia" id="brutto" value="brutto" onClick={handleValueChange} />
            </StyledRadioLabel>
            <StyledRadioLabel
              style={{ fontWeight: !isBolded ? "bold" : "normal" }}
              onClick={() => {
                setIsBolded(false);
              }}
              htmlF
              or="netto"
            >
              netto (na ręke)
              <input type="radio" id="netto" name="typ_wynagrodzenia" value="netto" onClick={handleValueChange} />
            </StyledRadioLabel>
            <StyledForm onSubmit={handleSubmit}>
              <KwotaWrapper>
                kwota wynagrodzenia {radioVal === "brutto" ? "(brutto)" : "(netto)"}
                <input type="number" value={inputVal} onChange={handleValueChange} />
              </KwotaWrapper>
              <StyledButton type="submit" value="Oblicz" />
            </StyledForm>
          </>
        )}
        {isVisible && (
          <>
            <StyledWrapper>
              <div style={{ width: "50%" }}>
                {" "}
                <Netto>{radioVal === "brutto" ? <CountNetto kwota={netto} /> : <CountBrutto kwota={brutto} />}</Netto>
                <Netto>
                  <CountBruttoBrutto kwota={bruttoBrutto} salaryType={radioVal} />
                </Netto>
              </div>
              <div style={{ width: "50%" }}>
                <StyledButton
                  value="Zmień kryteria"
                  onClick={() => {
                    window.location.reload();
                  }}
                />
              </div>
            </StyledWrapper>
            <StyledTable>
              <tbody>
                <tr>
                  <td>Stopień niepełnosprawności</td>
                  <TableCell>Dofinansowanie do wynagrodzenia</TableCell>
                  <TableCell>Koszt Pracodwacy</TableCell>
                </tr>
                <tr>
                  <td>Lekki</td>
                  <TableCell>450 zł</TableCell>
                  <TableCell>{bruttoBrutto < 450 ? 0 : (bruttoBrutto - 450).toFixed(2)} zł</TableCell>
                </tr>
                <tr>
                  <td>umiarkowany</td>
                  <TableCell>1200 zł</TableCell>
                  <TableCell>{bruttoBrutto < 1200 ? 0 : (bruttoBrutto - 1200).toFixed(2)} zł</TableCell>
                </tr>
                <tr>
                  <td>znaczny</td>
                  <TableCell>1950 zł</TableCell>
                  <TableCell>{bruttoBrutto < 1950 ? 0 : (bruttoBrutto - 1950).toFixed(2)} zł</TableCell>
                </tr>
                <tr>
                  <td>Lekki + schorzenie specjalne</td>
                  <TableCell>1050 zł</TableCell>
                  <TableCell>{bruttoBrutto < 1050 ? 0 : (bruttoBrutto - 1050).toFixed(2)} zł</TableCell>
                </tr>
                <tr>
                  <td>Umiarkowany + schorzenie specjalne</td>
                  <TableCell>2100 zł</TableCell>
                  <TableCell>{bruttoBrutto < 2100 ? 0 : (bruttoBrutto - 2100).toFixed(2)} zł</TableCell>
                </tr>
                <tr>
                  <td>Znaczny + schorzenie specjalne</td>
                  <TableCell>3150 zł</TableCell>
                  <TableCell>{bruttoBrutto < 3150 ? 0 : (bruttoBrutto - 3150).toFixed(2)} zł</TableCell>
                </tr>
              </tbody>
            </StyledTable>
          </>
        )}
      </ContentWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 4rem auto;
`;

const KwotaWrapper = styled.label`
  font-size: 28px;
  position: relative;
  width: 70%;
  display: flex;
  flex-direction: column;
  input {
    height: 27px;
    font-size: 21px;
    padding: 12px;
    margin-top: 15px;
  }
  &:after {
    content: "ZŁ";
    position: absolute;
    top: 59%;
    right: 40px;
    font-size: 21px;
  }
`;

const StyledForm = styled.form`
  margin-top: 40px;
  display: flex;
`;

const StyledButton = styled.input`
  text-align: center;
  background-color: #f3ce12;
  text-transform: uppercase;
  color: #2c2c2c;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  outline: none;
  height: 56px;
  align-self: flex-end;
  padding-right: 44px;
  padding-left: 44px;
  margin-left: 50px;
  border-radius: 65px;
  &:hover {
    color: white;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  td {
    padding: 16px;
    border-bottom: 1px solid #a9a9a9;
  }
`;

const Netto = styled.div`
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TableCell = styled.td`
  text-align: right;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRadioLabel = styled.label`
  padding-right: 50px;
  cursor: pointer;
  font-size: 20px;
  input {
    cursor: pointer;
  }
`;

export default Main;
