using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ContactBackEnd.Data.Migrations
{
    public partial class lastChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Contacts");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Contacts",
                newName: "ContactId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ContactId",
                table: "Contacts",
                newName: "Id");

            migrationBuilder.AddColumn<byte>(
                name: "Gender",
                table: "Contacts",
                type: "tinyint",
                nullable: false,
                defaultValue: (byte)0);
        }
    }
}
