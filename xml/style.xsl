<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <xsl:apply-templates select="requests" />
        <xsl:apply-templates select="cipher" />
    </xsl:template>
    <xsl:template match="cipher">
          <h4 style="padding: 8px 8px 2px 8px;">Your Encrypted Text: <small><xsl:value-of select="value" /></small></h4>
    </xsl:template>
    <xsl:template match="requests">
        <table class="table table-striped">
            <thead>
                <h4>Your Latest Request</h4>
            </thead>
            <tr>
                <th>Input</th>
                <th>Output</th>
            </tr>
            <xsl:for-each select="request">
                    <tr>
                        <td><xsl:value-of select="original" /></td>
                        <td><xsl:value-of select="encrypted" /></td>
                    </tr>
            </xsl:for-each>
        </table>
    </xsl:template>
</xsl:stylesheet>
